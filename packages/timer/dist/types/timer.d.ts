import { LitElement } from 'lit';
export declare class TimeCount extends LitElement {
    static styles: import("lit").CSSResult;
    __shadowRoot: ShadowRoot | null;
    header: string;
    counter: number;
    split: string;
    sort: string;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(name: string, ov: string, nv: string): void;
    __increment(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
