// Singleton

const Logger = {
    printOnConsole: ({ log, color = 'red' }) => {
        console.log(`%c ${log}`, `color: ${color}`)
    },
    appendLog: ({ log = 'sin log', color = 'red' }) => {
        const element = document.getElementById('singleton');
        const div = document.createElement('div');
        div.style = `color: ${color}`;
        div.innerText = `${log} ${new Date().toLocaleTimeString()}`;
        element.append(div)
    }
};

const baseUrl = "https://escalab-6b3e3.firebaseio.com/javascript"

const Api = {
    base: (id) => fetch(`${baseUrl}/${id}.json`),
    llamadaId1: async function() {
        const result = await this.base(1);
        console.log(result)
        return result.json();
    }
}
