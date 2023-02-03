export function postSlug(filePath: string): string | undefined {
    return filePath.split("/")[filePath.split("/").length-1]?.split(".")[0];
}

