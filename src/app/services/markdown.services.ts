/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-31 09:57:09                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-31 10:16:23                               *
 *****************************************************************************/

// markdown.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  constructor(private http: HttpClient) {}

  loadAllMarkdown(): Observable<string[]> {
    const files = [
      'example1.md',
      'example2.md',
      'example3.md',
    ];
    const requests = files.map((filePath: any) =>
      this.http.get(`/changelog/${filePath}`, { responseType: 'text' })
    );

    return forkJoin(requests).pipe(
      map((responses: any) => responses.map((markdown: any) => markdown))
    );
  }
}
