import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import {
  TodoStatusOption,
  todoStatusOptions,
} from '../../types/TodoStatusOption';

interface Props {
  allTodos: Todo[];
  currentFilter: TodoStatusOption;
}

export const Footer: React.FC<Props> = ({ allTodos, currentFilter }) => {
  const activeTodos = allTodos.filter(t => !t.completed);
  const completedTodos = allTodos.filter(t => t.completed);

  return (
    <footer
      className={classNames('todoapp__footer', { hidden: !!allTodos })}
      data-cy="Footer"
    >
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodos.length} items left
      </span>

      <nav className="filter" data-cy="Filter">
        {todoStatusOptions.map(option => {
          const capitalizedOption =
            option.charAt(0).toUpperCase() + option.slice(1);
          const urlSuffix = option === 'all' ? '' : option;

          return (
            <a
              href={`#/${urlSuffix}`}
              className={classNames('filter__link', {
                selected: currentFilter === option,
              })}
              data-cy={`FilterLink${capitalizedOption}`}
              key={option}
            >
              {capitalizedOption}
            </a>
          );
        })}
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!completedTodos.length}
      >
        Clear completed
      </button>
    </footer>
  );
};
