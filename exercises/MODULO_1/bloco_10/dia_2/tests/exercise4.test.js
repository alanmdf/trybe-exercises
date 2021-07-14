const getRepos = require('../exercises/exercise4');

describe('When using "getRepos" function:', () => {
  it('should check if some repos are in the list', async () => {
    const toDoList = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(toDoList).toContain('sd-01-week4-5-project-todo-list');
    expect(toDoList).toContain('sd-01-week4-5-project-meme-generator');
  });
});