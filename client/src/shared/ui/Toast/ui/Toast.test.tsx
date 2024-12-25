
import { render,screen } from "@testing-library/react";
import Toast from "./Toast";

describe("Toast test", () => {
    test("Suscess render ", () => {
        render(<Toast text="Success text" type="success" />);
        expect(screen.getByText("Success text")).toBeInTheDocument();
    });

    test("Warning render ", () => {
        render(<Toast text="Warning text" type="warning" />);
        expect(screen.getByText("Warning text")).toBeInTheDocument();
    });

    test("Danger render ", () => {
        render(<Toast text="Danger text" type="danger" />);
        expect(screen.getByText("Danger text")).toBeInTheDocument();
    });
});