import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { BlogTechComponent } from './blog-tech/blog-tech.component';
import { BlogTechDetailComponent } from './blog-tech-detail/blog-tech-detail.component';
import { BlogTechAboutMeComponent } from './blog-tech-about-me/blog-tech-about-me.component';

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
    },
    {
        path: 'blog-tech-detail',
        component: BlogTechDetailComponent
    },
    {
        path: 'blog-tech/about-me',
        component: BlogTechAboutMeComponent
    }
];
