import clsx from 'clsx';

export function SpecialLabel({ flag } : { flag: string }) {
  return <label
          className={clsx(
            {
              'bg-green-500 text-white': flag == "1",
              'bg-red-500 text-white': flag == "2"
            }
          )}
          >
            Testing Label !!!
          </label>
}
