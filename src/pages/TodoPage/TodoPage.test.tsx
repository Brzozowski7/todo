import { render, screen } from "@testing-library/react";
import TodoPage from "./TodoPage";
import withProviders from "../../hoc/withProviders";

const todoMock = {
  task: "abc1",
  name: "zxc1",
  description: "lorem ipsum",
  deadline: "13313123321",
  createdAt: "13313123300",
  completed: false,
  urgent: true,
};

const TodoPageWithProviders = withProviders(TodoPage);

jest.mock("./useGetTodoDetails", () => ({
  __esModule: true,
  default: () => todoMock,
}));

describe("TodoPage tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("renders task name", () => {
    render(<TodoPageWithProviders language="en" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  test.each([
    { lang: "fr", text: `Ajouté par: ${todoMock.name}` },
    { lang: "en", text: `Added By: ${todoMock.name}` },
    { lang: "de", text: `Hinzugefügt von: ${todoMock.name}` },
  ])("renders added by correctly", ({ lang, text }) => {
    //when
    render(<TodoPageWithProviders language={lang} />);
    //then
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  test.each([
    { lang: "fr", text: `La description: ${todoMock.description}` },
    { lang: "en", text: `Description: ${todoMock.description}` },
    { lang: "de", text: `Beschreibung: ${todoMock.description}` },
  ])("renders description correctly", ({ lang, text }) => {
    //when
    render(<TodoPageWithProviders language={lang} />);
    //then
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  test.each([
    { lang: "fr", text: `Toutes les tâches de ${todoMock.name}` },
    { lang: "en", text: `All Todos of ${todoMock.name}` },
    { lang: "de", text: `Alle Todos von ${todoMock.name}` },
  ])("renders all todos link correctly", ({ lang, text }) => {
    //when
    render(<TodoPageWithProviders language={lang} />);
    //then
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  test.each([
    { lang: "fr", text: `Établie: ${new Date(todoMock.createdAt)}` },
    { lang: "en", text: `Created: ${new Date(todoMock.createdAt)}` },
    { lang: "de", text: `Erstellt: ${new Date(todoMock.createdAt)}` },
  ])("renders all todos link correctly", ({ lang, text }) => {
    //when
    render(<TodoPageWithProviders language={lang} />);
    //then
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  test.each([
    { lang: "fr", text: `Date limite: ${new Date(todoMock.deadline)}` },
    { lang: "en", text: `Deadline: ${new Date(todoMock.deadline)}` },
    { lang: "de", text: `Termin: ${new Date(todoMock.deadline)}` },
  ])("renders all todos link correctly", ({ lang, text }) => {
    //when
    render(<TodoPageWithProviders language={lang} />);
    //then
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  test.each([
    { lang: "fr", text: `Temps restant: Expiré` },
    { lang: "en", text: `Time left: Expired` },
    { lang: "de", text: `Übrige Zeit: Abgelaufen` },
  ])("renders time left when expired correctly", ({ lang, text }) => {
    //when
    render(<TodoPageWithProviders language={lang} />);
    //then
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  test.each([
    { lang: "fr", text: `Complété: Non` },
    { lang: "en", text: `Completed: No` },
    { lang: "de", text: `Abgeschlossen: Nein` },
  ])("renders completed status correctly", ({ lang, text }) => {
    //when
    render(<TodoPageWithProviders language={lang} />);
    //then
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  test.each([
    { lang: "fr", text: `Urgente: Oui` },
    { lang: "en", text: `Urgent: Yes` },
    { lang: "de", text: `Dringend: Ja` },
  ])("renders urgent status correctly", ({ lang, text }) => {
    //when
    render(<TodoPageWithProviders language={lang} />);
    //then
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
