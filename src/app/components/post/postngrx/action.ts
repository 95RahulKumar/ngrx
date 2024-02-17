import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Post } from './interface';

export const fetchApiAction = createActionGroup({
  source: 'POST API',
  events: {
    'Fetch Post': emptyProps(),
    'Fetch Post Sucess': props<{ posts: Post[] }>(),
    'Fetch Post Failure': props<{ error: string }>(),
    'Delete post': props<{ post: Post }>(),
    'Delete Post Sucess': props<{ message: string }>(),
    'Delete Post Failure': props<{ error: string }>(),
  },
});
