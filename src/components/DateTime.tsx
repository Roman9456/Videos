export interface DateTimeProps {
  date: string;
}

export function DateTime(props: DateTimeProps) {
  return <p className="date">{props.date}</p>;
}