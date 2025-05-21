import { FaTools } from 'react-icons/fa';

const WorkInProgress = ({ small = false }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${small ? 'p-4' : 'min-h-[60vh] p-8'} bg-white/85 rounded-xl shadow-md`}
      style={{ maxWidth: small ? 320 : 600, margin: '0 auto' }}
    >
      <FaTools size={small ? 48 : 96} className="text-oyoya-purple mb-4" />
      <h2 className={`font-bold ${small ? 'text-lg' : 'text-2xl'} text-oyoya-purple mb-2 text-center`}>
        Scusate per il disagio!
      </h2>
      <p className={`text-oyoya-purple ${small ? 'text-sm' : 'text-lg'} text-center`}>
        Stiamo lavorando per voi.<br />Questa sezione sarà presto disponibile.
      </p>
    </div>
  );
};

export default WorkInProgress; 