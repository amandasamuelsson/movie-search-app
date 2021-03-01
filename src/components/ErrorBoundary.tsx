import React, { Component, CSSProperties, ErrorInfo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {}
interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false
    };

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log({ error, errorInfo });
    }

    navigateBack = () => this.props.history.goBack();
    
    render() {
        if (this.state.hasError) {
            return (
                <div style={errorStyle}>
                    <p style={textErrorStyle}>Innehållet kunde inte laddas.</p>
                    <button style={buttonErrorStyle} onClick={this.navigateBack}>Prova gå tillbaka</button>
                </div>
            );
        }

        return this.props.children;
    }
}

const errorStyle: CSSProperties = {
    background: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const textErrorStyle: CSSProperties = {
    textAlign: 'center'
}

const buttonErrorStyle: CSSProperties = {
    backgroundColor: '#564b60',
    color: 'white',
    padding: '0.5em',
    fontWeight: 'bold',
    border: 'none',
    textDecoration: 'none'
}
export default withRouter(ErrorBoundary);

