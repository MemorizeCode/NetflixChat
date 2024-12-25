import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (story: () => JSX.Element) => {
    return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
    );
};
