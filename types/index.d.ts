// Type definitions for filestack-js 0.8.1
// Project: filestack-js
// Definitions by: Filestack Developers https://filestack.com

export as namespace filestack;
export const version: string;

export function init(apikey: string, security?: Security): FilestackClient;

export interface Security {
    policy: string;
    signature: string;
}

export interface PickOptions {
}

export interface RetrieveOptions {
}

export interface StoreOptions {
}

export interface UploadOptions {
}

export interface TransformOptions {
}

export interface FileData {
}

export interface PickerData {
}

export interface FilestackClient {
    getSecurity(): Security;
    setSecurity(s: Security): object;
    pick(options: PickOptions): Promise<PickerData>;
    remove(handle: string): Promise<FileData>;
    retrieve(handle: string, options?: RetrieveOptions): Promise<FileData>;
    storeURL(url: string, options?: StoreOptions): Promise<FileData>;
    transform(url: string, options?: TransformOptions): string;
    upload(
        file: Blob | string,
        uploadOptions?: UploadOptions,
        storeOptions?: StoreOptions,
        token?: object
    ): Promise<FileData>;
}
