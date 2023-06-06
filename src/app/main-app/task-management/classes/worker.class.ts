import { EMPTY, Observable, catchError, map, of, take } from "rxjs";

export class Worker<T> {

    public data$: Observable<T[]> = of([]);

    fetch(actions$: Observable<T[]>): void {
        this.data$ = actions$;
    }

    delete(actions$: Observable<T>, id: string): void {
        this.perform(actions$).subscribe(() => {
            this.data$ = this.data$.pipe(
                map(value => value.filter(v => (v as any)._id !== id))
            );
        });
    }

    update(actions$: Observable<T>): void {
        this.perform(actions$).subscribe((res) => {
            this.data$ = this.data$.pipe(
                map(value => value.map(d => (d as any)._id === (res as any)._id ? res : d))
            );
        });
    }

    insert(actions$: Observable<T>): void {
        this.perform(actions$).subscribe((res) => {
            this.data$ = this.data$.pipe(
                map(value => [...value, res]));
        });
    }

    private perform(actions$: Observable<any>): Observable<any> {
        return actions$.pipe(
            take(1),
            catchError(() => {
                return EMPTY;
            })
        );
    }
}