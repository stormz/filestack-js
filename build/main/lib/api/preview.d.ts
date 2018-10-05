import { Security, Session } from '../client';
export interface PreviewOptions {
    /**
     * Id for DOM element to embed preview into.
     * Omit this to open the preview in a new tab
     */
    id: string;
    /**
     * URL to custom CSS
     */
    css?: string;
}
/**
 * Returns file preview url
 *
 * @private
 * @param session
 * @param handle
 * @param opts
 * @param security
 */
export declare const getUrl: (session: Session, handle: string, opts?: any, security?: Security) => string;
/**
 * Appends image preview into page
 *
 * @private
 * @param session
 * @param handle
 * @param opts
 */
export declare const preview: (session: Session, handle?: string, opts?: PreviewOptions) => Window | HTMLIFrameElement;
