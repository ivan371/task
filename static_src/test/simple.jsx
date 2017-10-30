const simple = (a, b) => {
    return a + b
}

describe('action tests', () => {
    describe('simple reducer', () => {
        it('test simple reducer', () => {
            expect(simple(1,2)).toBe(3);
        });
    })
});