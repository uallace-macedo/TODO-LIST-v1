# 📒 Diário de Aprendizado

Durante o desenvolvimento, aprendi e reforcei vários conceitos importantes de JavaScript e DOM. Aqui vão algumas anotações pessoais:

## 📌 Manipulação do DOM

Para acessar e interagir com elementos HTML via JavaScript, usamos o método:

```js
document.querySelector('.classe')
```

## 📌 Eventos

Para adicionar ações aos botões, por exemplo, é possível utilizar o `addEventListener()`, exemplo:

```js
element.addEventListener('click', function);
```

## 📌 map e filter

Utilizei `map()` para atualizar o estado das tarefas (ex: marcar como concluída) e `filter()` para remover tarefas da lista:

```js
tasks = tasks.map(task => {
  return task.id === id ? { ...task, checked: !task.checked } : task;
});

tasks = tasks.filter(task => task.id !== id);
```

## 📌 localStorage

Armazenei a lista de tarefas no navegador para que não se percam ao recarregar a página:

```js
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
localStorage.setItem('tasks', JSON.stringify(tasks));
```

## ✅ Bonus: Pequenas melhorias
- Animações suaves em elementos com `transition`.
- Ícones com hover animado usando `transform: scale(1.2)`.