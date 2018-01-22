const myTheme = {
    render(state, instance) {
        const container = document.createElement('div');
        container.lang = "en-US";
        container.className = 'gitment-container gitment-root-container';

        // your custom component

        container.appendChild(instance.renderEditor(state, instance));
        container.appendChild(instance.renderComments(state, instance));

        return container
    },
};
const gitment = new Gitment({
    id: 'index.html', // 可选。默认为 location.href
    owner: 'ZeBang',
    repo: 'zebang.github.io',
    oauth: {
        client_id: 'd4d02c7e10109ce10535',
        client_secret: 'c28a951b33aeda3ee8bb7fdf7583e488441773bc',
    },
    theme: myTheme,
});

gitment.render('container')
// or
// gitment.renderSomthing(document.body)
// gitment.render('container')
