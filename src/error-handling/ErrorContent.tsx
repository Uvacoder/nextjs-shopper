import Button from '@src/common/Button';
import { StatusCodes } from 'http-status-codes';

export type ErrorContentProps = {
  statusCode: StatusCodes;
  message: string;
};

export default function ErrorContent({
  statusCode,
  message,
}: ErrorContentProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="flex items-center">
        <span className="border-r-2 p-4 text-3xl font-bold text-text-lighter">
          {statusCode}
        </span>
        <span className="p-4 font-semibold text-lg text-text-light">
          {message}
        </span>
      </div>
      <Button href="/">Back to Home</Button>
    </div>
  );
}
