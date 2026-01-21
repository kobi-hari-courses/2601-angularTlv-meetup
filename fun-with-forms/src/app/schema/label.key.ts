import { createMetadataKey, metadata, SchemaPath } from "@angular/forms/signals";

export const LABEL = createMetadataKey<string>();

export function withLabel<T>(path: SchemaPath<T>, label: string) {
    metadata(path, LABEL, () => label);
}