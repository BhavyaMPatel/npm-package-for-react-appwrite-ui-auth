import {render, screen} from '@testing-library/react'
import OAuth from './OAuth'

describe("SearchForm", () => {
   test("renders SearchForm", () => {
    render(<OAuth provider={"google"} />);
    expect(screen.toHaveTextContent("heading", { name: /location search/i })).toBeVisible();
  });
});