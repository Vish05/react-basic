import {render, screen} from '@testing-library/react';
import Async from './Async'

describe('Async Component', () => {
    test('render post if request success', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 1, title:"First Post"}]
        });
        render(<Async />);

        const listItemElement = await screen.findAllByRole('listitem', {}, {});
        expect(listItemElement).not.toHaveLength(0);
    })    
});

