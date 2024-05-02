import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { BlogTechComponent } from './blog-tech/blog-tech.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'projects-list',
        component: ProjectsListComponent
    },
    {
        path: 'blog-tech',
        component: BlogTechComponent
    }
];
