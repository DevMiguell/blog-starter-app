import { ptBR } from 'date-fns/locale';
import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "d 'de' LLLL 'de' yyyy", { locale: ptBR })}</time>;
};

export default DateFormatter;