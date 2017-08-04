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

export type Source =
    'local_file_system'
    |'url'
    |'imagesearch'
    |'facebook'
    |'instagram'
    |'googledrive'
    |'dropbox'
    |'webcam '
    |'evernote'
    |'flickr'
    |'box'
    |'github'
    |'gmail'
    |'picasa'
    |'onedrive'
    |'clouddrive'
    |'customsource';

export type Language = 'da'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'he'
    | 'it'
    | 'ja'
    | 'nl'
    | 'pl'
    | 'pt'
    | 'ru'
    | 'zh';

export type TransitStatus = 'Stored' | 'InTransit' | 'Failed';

export type Location = 's3' | 'azure' | 'rackspace' | 'gcs' | 'dropbox';

export interface PickOptions {
  fromSources?: Array<Source>;
  accept?: string | Array<string>;
  customSourceContainer?: string;
  customSourcePath?: string;
  preferLinkOverStore?: boolean;
  lang?: Language;
  minFiles?: number;
  maxFiles?: number;
  maxSize?: number,
  startUploadingWhenMaxFilesReached?: boolean;
  hideWhenUploading?: boolean;
  uploadInBackground?: boolean;
  disableTransformer?: boolean;
  disableThumbnails?: boolean;
  transformations?: object; // TODO make this more verbose
  imageDim?: Array<number>;
  imageMax?: Array<number>;
  imageMin?: Array<number>;
  storeTo?: StoreOptions;
  onFileSelected?(file: object): void;
  onFileUploadStarted?(file: object): void;
  onFileUploadProgress?(file: object, event: ProgressObject): void;
  onFileUploadFinished?(file: object): void;
  onFileUploadFailed?(file: object, error: object): void;
  onClose?(): object;
  rejectOnCancel?: boolean;
}

export interface RetrieveOptions {
  metadata: boolean;
  head: boolean;
  dl: boolean;
  extension: string;
}

export interface StoreOptions {
    location: Location;
    path: string;
    container: string;
    region: string;
    access: string;
}

export interface UploadOptions {
  partSize?: number;
  concurrency?: number;
  retry?: number;
  progressInterval?: number;
  onProgress?(progress: ProgressObject): void;
  onRetry?(retry: RetryObject): void;
}

export interface ProgressObject {
    totalPercent: number;
    totalBytes: number;
}

export interface RetryObject {
  location: string;
  parts: Array<object>;
  filename: string;
  attempt: number;
}


export interface FileData {
  filename: string;
  handle: string;
  mimetype: string;
  originalPath: string;
  size: number;
  source: string;
  url: string;
  key: string;
  container: string;
  status: TransitStatus;
}

export interface PickerData {
  filesUploaded?: Array<object>;
  filesFailed?: Array<object>;
}

export interface FilestackClient {
    getSecurity(): Security;
    setSecurity(s: Security): object;
    pick(options: PickOptions): Promise<PickerData>;
    remove(handle: string): Promise<FileData>;
    retrieve(handle: string, options?: RetrieveOptions): Promise<FileData>;
    storeURL(url: string, options?: StoreOptions): Promise<FileData>;
    transform(url: string, options?: object): string;
    upload(
        file: Blob | string,
        uploadOptions?: UploadOptions,
        storeOptions?: StoreOptions,
        token?: object
    ): Promise<FileData>;
}
