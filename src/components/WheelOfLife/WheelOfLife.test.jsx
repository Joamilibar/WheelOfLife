import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WheelOfLife from './WheelOfLife.jsx';
import { SECTION_NAMES } from './wheelConfig';

describe('WheelOfLife', () => {
    test('renders the heading', () => {
        render(<WheelOfLife />);
        expect(screen.getByText('Rueda de la Vida')).toBeInTheDocument();
    });

    test('renders the logo image', () => {
        render(<WheelOfLife />);
        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });

    test('renders all 8 section sliders', () => {
        render(<WheelOfLife />);
        const sliders = screen.getAllByRole('slider');
        expect(sliders).toHaveLength(8);
    });

    test('renders all section names as labels', () => {
        render(<WheelOfLife />);
        SECTION_NAMES.forEach((name) => {
            expect(screen.getByText(`${name}:`)).toBeInTheDocument();
        });
    });

    test('all sliders start at value 0', () => {
        render(<WheelOfLife />);
        const sliders = screen.getAllByRole('slider');
        sliders.forEach((slider) => {
            expect(slider).toHaveValue('0');
        });
    });

    test('moving a slider updates the displayed value', () => {
        render(<WheelOfLife />);
        const sliders = screen.getAllByRole('slider');

        fireEvent.change(sliders[0], { target: { value: '7' } });

        expect(sliders[0]).toHaveValue('7');
        expect(screen.getByText('7')).toBeInTheDocument();
    });

    test('shows "Mostrar Rueda" button initially', () => {
        render(<WheelOfLife />);
        expect(screen.getByText('Mostrar Rueda')).toBeInTheDocument();
    });

    test('does not render the wheel SVG initially', () => {
        render(<WheelOfLife />);
        expect(screen.queryByRole('img', { name: /wheel/i })).not.toBeInTheDocument();
        // The SVG has className "wheel", check it's not present
        const svg = document.querySelector('.wheel');
        expect(svg).not.toBeInTheDocument();
    });

    test('clicking "Mostrar Rueda" shows the wheel and changes button text', () => {
        render(<WheelOfLife />);
        const button = screen.getByText('Mostrar Rueda');

        fireEvent.click(button);

        expect(screen.getByText('Ocultar Rueda')).toBeInTheDocument();
        const svg = document.querySelector('.wheel');
        expect(svg).toBeInTheDocument();
    });

    test('clicking "Ocultar Rueda" hides the wheel', () => {
        render(<WheelOfLife />);
        const button = screen.getByText('Mostrar Rueda');

        // Show the wheel
        fireEvent.click(button);
        expect(document.querySelector('.wheel')).toBeInTheDocument();

        // Hide the wheel
        fireEvent.click(screen.getByText('Ocultar Rueda'));
        expect(document.querySelector('.wheel')).not.toBeInTheDocument();
        expect(screen.getByText('Mostrar Rueda')).toBeInTheDocument();
    });

    test('the wheel SVG renders 8 sections with paths', () => {
        render(<WheelOfLife />);
        fireEvent.click(screen.getByText('Mostrar Rueda'));

        const svg = document.querySelector('.wheel');
        expect(svg).toBeInTheDocument();

        // Each section has 10 paths (levels), so 8 * 10 = 80 paths
        const paths = svg.querySelectorAll('path');
        expect(paths).toHaveLength(80);
    });

    test('the wheel SVG renders all section labels as text', () => {
        render(<WheelOfLife />);
        fireEvent.click(screen.getByText('Mostrar Rueda'));

        SECTION_NAMES.forEach((name) => {
            // Section names appear both as slider labels and SVG text
            const elements = screen.getAllByText(new RegExp(name));
            expect(elements.length).toBeGreaterThanOrEqual(2);
        });
    });
});
