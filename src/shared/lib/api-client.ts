/**
 * @fileoverview Typed fetch wrapper with ApiError and NetworkError handling.
 */

/**
 * Custom error class for API response errors.
 */
export class ApiError extends Error {
  readonly status: number;
  readonly statusText: string;

  /**
   * Creates an API error instance.
   *
   * @param {number} status HTTP status code.
   * @param {string} statusText HTTP status text.
   * @param {string} message Error message.
   */
  constructor(status: number, statusText: string, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.statusText = statusText;
  }
}

/**
 * Custom error class for network connectivity issues.
 */
export class NetworkError extends Error {
  /**
   * Creates a network error instance.
   *
   * @param {string} message Error message.
   */
  constructor(message = "اتصال شبکه برقرار نشد.") {
    super(message);
    this.name = "NetworkError";
  }
}

interface RequestOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
}

/**
 * Attempts to extract a user-friendly error message from the API response.
 *
 * @param {Response} response The failed HTTP response.
 * @returns {Promise<string>} Parsed error message or generic fallback.
 */
async function parseErrorMessage(response: Response): Promise<string> {
  try {
    const data: unknown = await response.json();

    if (
      typeof data === "object" &&
      data !== null &&
      "message" in data &&
      typeof data.message === "string"
    ) {
      return data.message;
    }
  } catch {
    // Fall through to the generic HTTP message.
  }

  return `درخواست با وضعیت ${response.status} ناموفق بود.`;
}

/**
 * Typed fetch wrapper for API requests with error handling.
 *
 * @template T Expected response type.
 * @param {string} url Request URL.
 * @param {RequestOptions} options Fetch options.
 * @returns {Promise<T>} Parsed JSON response.
 * @throws {NetworkError} When network request fails.
 * @throws {ApiError} When API returns non-OK status.
 */
export async function apiClient<T>(
  url: string,
  options: RequestOptions = {},
): Promise<T> {
  const { body, headers, ...rest } = options;

  let response: Response;

  try {
    response = await fetch(url, {
      ...rest,
      headers: {
        Accept: "application/json",
        ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      cache: rest.cache ?? "no-store",
    });
  } catch {
    throw new NetworkError();
  }

  if (!response.ok) {
    throw new ApiError(
      response.status,
      response.statusText,
      await parseErrorMessage(response),
    );
  }

  try {
    return (await response.json()) as T;
  } catch {
    throw new ApiError(
      response.status,
      response.statusText,
      "پاسخ سرور قابل خواندن نیست.",
    );
  }
}
