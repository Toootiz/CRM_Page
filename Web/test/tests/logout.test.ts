import { authProvider } from '../src/authProvider';

describe('authProvider', () => {
    describe('logout', () => {
        it('Debe quitar el username de localStorage', async () => {
            const removeItemSpy = jest.spyOn(localStorage, 'removeItem');
            await authProvider.logout({});
            expect(removeItemSpy).toHaveBeenCalledWith('username');
            removeItemSpy.mockRestore();
        });
    });
});