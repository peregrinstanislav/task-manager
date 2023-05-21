import { Observable, catchError, take } from "rxjs";

export class Worker<T> {

    fetchedData: T[] = [];

    fetch(actions$: Observable<T>): void {
        this.perform(actions$).subscribe((data: any) => {
            this.fetchedData = data;
        });
    }

    delete(actions$: Observable<T>, id: string): void {
        this.perform(actions$).subscribe(() => {
            this.fetchedData = this.fetchedData?.filter(d => (d as any)._id !== id);
        });
    }

    update(actions$: Observable<T>): void {
        this.perform(actions$).subscribe((res) => {
            this.fetchedData = this.fetchedData?.map(d => (d as any)._id === (res as any)._id ? res : d);
        });
    }

    insert(actions$: Observable<T>): void {
        this.perform(actions$).subscribe((res) => {
            this.fetchedData?.push(res);
        });
    }

    private perform(actions$: Observable<T>): Observable<T> {
        return actions$.pipe(
            take(1),
            catchError(() => {
                return [];
            })
        );
    }
}