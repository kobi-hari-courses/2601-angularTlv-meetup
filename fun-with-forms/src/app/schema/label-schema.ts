import { metadata, SchemaPath } from "@angular/forms/signals";
import { LABEL } from "./label.metadata-key";

export function withLabel<T>(path: SchemaPath<T>, label: string) {
    metadata(path, LABEL, () => label);
}