import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {path: '', renderMode: RenderMode.Prerender},
  {path: 'table-projects', renderMode: RenderMode.Prerender},
  {path: 'card-projects', renderMode: RenderMode.Prerender},
  {path: 'card-projects/show/:repoName', renderMode: RenderMode.Server},
  {path: 'biography', renderMode: RenderMode.Prerender},
  {path: 'draw-code', renderMode: RenderMode.Prerender},
  
];
