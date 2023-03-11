import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'chunk' })
export class ChunkPipe implements PipeTransform {
    transform<T>(arr: T[], _: any): T[][] {
        const chunkSize = Math.ceil(arr.length / 3);
        return arr.reduce((acc: T[][], val: T, i: number) => {
          const idx = Math.floor(i / chunkSize);
          const page = acc[idx] || (acc[idx] = []);
          page.push(val);
          return acc;
        }, [] as T[][]);
      }
}

