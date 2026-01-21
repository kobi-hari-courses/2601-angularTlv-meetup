import { createMetadataKey, metadata, SchemaPath, validate } from "@angular/forms/signals";

export const MAX_WORDS = createMetadataKey<number>();

export function maxWords(path: SchemaPath<string>, maxWords: number) {
    metadata(path, MAX_WORDS, () => maxWords);
    validate(path, ctx => {
        const value = ctx.value();
        const wordCount = value ? value.trim().split(/\s+/).length : 0;
        if (wordCount > maxWords) {
            return {
                kind: 'maxWords',
                message: 'The field cannot exceed ' + maxWords + ' words. (Current word count: ' + wordCount + ')'
            }
        }

        return null;
    })
}

