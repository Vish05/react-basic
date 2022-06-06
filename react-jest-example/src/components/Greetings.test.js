import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greetings from './Greetings';

describe('Greeting Component', () => {
    test('render Hello World as text', () => {
        render(<Greetings/ >);

        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('render Good to see you if button was not clicked', () => {
        render(<Greetings/ >);
        
        const outputElement = screen.getByText(`It's good to see you!`);
        expect(outputElement).toBeInTheDocument();
    });

    test('render Changed if button was not clicked', () => {
        render(<Greetings/ >);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement) 

        const outputElement = screen.getByText("Changed");
        expect(outputElement).toBeInTheDocument();
    });

    test("Does not render good to see you if button was clicked", () => {

        render(<Greetings/ >);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement) 

        const outputElement = screen.queryByText("It's good to see you!");
        expect(outputElement).toBeNull();

    })
});

