

export function loadScript(url: string, onOk?: () => void, onError?: () => void): void {
    const script = document.createElement("script");
    script.src = url;
    if (onOk) {
        script.onload = onOk;
    }
    if (onError) {
        script.onerror = onError;
    }
    document.body.appendChild(script);
}
