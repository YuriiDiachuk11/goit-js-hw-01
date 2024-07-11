function getElementWidth (content, padding, border) {
    const contentWidth = Number.parseFloat (content);
    const paddingWidth = Number.parseFloat (padding);
    const borderWidth = Number.parseFloat (border);
    const elementWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
    return `${elementWidth}`;
}
