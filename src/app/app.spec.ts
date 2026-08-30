import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

const collectRoutePaths = (routeList: any[], paths: string[] = []): string[] => {
  for (const route of routeList) {
    if (route.path) {
      paths.push(route.path);
    }
    if (route.children) {
      collectRoutePaths(route.children, paths);
    }
  }
  return paths;
};

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should define feature routes for the refactored site', () => {
    const paths = collectRoutePaths(routes);
    expect(paths).toContain('');
    expect(paths).toContain('about');
    expect(paths).toContain('courses');
    expect(paths).toContain('trainers');
    expect(paths).toContain('placements');
    expect(paths).toContain('contact');
  });
});
