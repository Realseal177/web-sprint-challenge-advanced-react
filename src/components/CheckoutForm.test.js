import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstName, 'Drewbz');

    const lastName = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastName, 'Nelson');

    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, '1234 Bizzle Way');

    const city = screen.getByLabelText(/City:/i);
    userEvent.type(city, 'Bizzle Town');

    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, 'WA');

    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(zip, '98926');

    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor (() => {
        const messageDisplay = screen.queryByTestId(/successMessage/i)
        // const firstNameDisplay = screen.queryByText(firstName);
        // const lastNameDisplay = screen.queryByText(lastName);
        // const addressDisplay = screen.queryByText(address);
        // const cityDisplay = screen.queryByText(city);
        // const stateDisplay = screen.queryByText(state);
        // const zipDisplay = screen.queryByText(zip);

        expect(messageDisplay).toBeInTheDocument();
        // expect(firstNameDisplay).toBeInTheDocument();
        // expect(lastNameDisplay).toBeInTheDocument();
        // expect(addressDisplay).toBeInTheDocument();
        // expect(cityDisplay).toBeInTheDocument();
        // expect(stateDisplay).toBeInTheDocument();
        // expect(zipDisplay).toBeInTheDocument();
    });


});
