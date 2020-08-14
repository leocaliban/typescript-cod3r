type Component = {
    new(...args: any[]): {
        render(): any
    }
}

export default function logRender<C extends Component>(component: C) {
    return class extends component {
        render() {
            console.log('Renderizando Componente...');
            const r: any = super.render();
            console.log('Renderizou!');
            return r;
        }
    }
}