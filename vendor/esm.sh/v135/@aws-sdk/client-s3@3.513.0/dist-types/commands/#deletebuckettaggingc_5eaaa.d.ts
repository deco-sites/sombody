import { Command as $Command } from "https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts";
import { MetadataBearer as __MetadataBearer } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { DeleteBucketTaggingRequest } from "../models/models_0.d.ts";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client.d.ts";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteBucketTaggingCommand}.
 */
export interface DeleteBucketTaggingCommandInput extends DeleteBucketTaggingRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketTaggingCommand}.
 */
export interface DeleteBucketTaggingCommandOutput extends __MetadataBearer {
}
declare const DeleteBucketTaggingCommand_base: {
    new (input: DeleteBucketTaggingCommandInput): import("https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts").CommandImpl<DeleteBucketTaggingCommandInput, DeleteBucketTaggingCommandOutput, S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("https://esm.sh/v135/@smithy/middleware-endpoint@2.4.1/dist-types/index.d.ts").EndpointParameterInstructions;
};
/**
 * @public
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Deletes the tags from the bucket.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:PutBucketTagging</code> action. By default, the bucket owner has this
 *          permission and can grant this permission to others. </p>
 *          <p>The following operations are related to <code>DeleteBucketTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteBucketTaggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketTaggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketTaggingCommandInput - {@link DeleteBucketTaggingCommandInput}
 * @returns {@link DeleteBucketTaggingCommandOutput}
 * @see {@link DeleteBucketTaggingCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To delete bucket tags
 * ```javascript
 * // The following example deletes bucket tags.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new DeleteBucketTaggingCommand(input);
 * await client.send(command);
 * // example id: to-delete-bucket-tags-1483043846509
 * ```
 *
 */
export declare class DeleteBucketTaggingCommand extends DeleteBucketTaggingCommand_base {
}
