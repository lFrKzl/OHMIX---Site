import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Oops! Algo deu errado.</h1>
            <p className="text-gray-700 mb-4">
              Ocorreu um erro ao carregar a aplicação. Por favor, verifique os detalhes abaixo:
            </p>
            <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm text-red-800 whitespace-pre-wrap">
              {error?.toString()}
            </pre>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 bg-azul-escuro text-white px-4 py-2 rounded hover:bg-opacity-90"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return children;
  }
}
