import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  const service = new ProjectsService();

  it('keeps Ranked One as retired past work with nothing to link to', () => {
    const rankedOne = service.getById('ranked-one');

    expect(rankedOne?.status).toBe('retired');
    expect(rankedOne?.links).toEqual([]);
    expect(rankedOne?.route).toBeUndefined();
    expect(rankedOne?.cardCta).toBeUndefined();
  });

  it('never links to the old Ranked One site from any project', () => {
    const urls = service.projects.flatMap(p => p.links.map(l => l.url));

    expect(urls.some(url => url.includes('ranked-one.com'))).toBe(false);
  });
});
