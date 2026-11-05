import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { translate as tr } from '../i18n/i18n';

const AssistantIA = () => {
  useTranslation();
  const welcomeMessage = "Bonjour ! Je suis l'assistant virtuel du Centre de Formation Professionnel HOPENESS. Posez-moi vos questions sur ses formations. ";

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: welcomeMessage }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chatEndRef = useRef(null);

  //auto scroll vers le bas a chaque nouveau message
  useEffect(()=>{
   chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  },[messages, isLoading]);

  const apiBaseUrls = [
    import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : ''),
  ].filter(Boolean);


  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    // 1. Ajouter le message de l'utilisateur à l'écran
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      let lastError = null;

      for (const apiBaseUrl of apiBaseUrls) {
        try {
          const response = await fetch(`${apiBaseUrl}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage }),
          });

          const data = await response.json();

          if (data.reply) {
            setMessages((prev) => [...prev, { sender: 'ai', text: data.reply }]);
            return;
          }

          lastError = new Error(data.error || tr('Oups, je rencontre un petit problème technique.'));
        } catch (error) {
          lastError = error;
        }
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: tr(lastError?.message || 'Impossible de joindre mon serveur pour le moment.') }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { sender: 'ai', text: tr(error.message || 'Impossible de joindre mon serveur pour le moment.') }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='fixed bottom-4 right-4 z-50 font-sans text-slate-100'>
      {
        !isOpen && (
          <button
          onClick={()=>setIsOpen(true)}
            aria-label={tr("Ouvrir l'assistant")}
            className="flex md:h-14 md:w-14 h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-500/30 duration-300 transition-all hover:scale-110 hover:bg-green-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a.598.598 0 0 1-.655-.075.598.598 0 0 1-.154-.6a5.85 5.85 0 0 0 .858-2.814C4.07 16.14 3 14.18 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
          </button>
        )}

      {isOpen && (
        <div className='flex h-[78vh] w-[calc(100vw-1.5rem)] z-50 max-w-[24rem] flex-col rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50 sm:h-125 sm:w-100'>
          {/*Header*/}
          <div className='flex items-center justify-between rounded-t-2xl border-b border-zinc-800 bg-zinc-900/50 px-4 py-3'>
            <div className='flex items-center gap-3'>
              <div className='relative h-3 w-3 rounded-full bg-emerald-500'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
              </div>
              <div>
                <h1 className='text-sm font-semibold tracking-wide'>{tr("Assistant IA")}</h1>
                <p className='text-xs text-zinc-400'>{tr("En ligne • Infos sur ")}<span className='font-bold text-green-600'>HOPENESS</span></p>
              </div>
            </div>
            <button
            onClick={()=>setIsOpen(false)}
              aria-label={tr("Fermer l'assistant")}
              className='text-zinc-400 hover:text-zinc-200 transition-colors'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/*Zone de message*/}
          <div className='flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-emerald-800'>
            {
              messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-md sm:max-w-[80%] sm:px-4 sm:py-2.5
                  ${msg.sender === 'user' ? 'bg-green-700 text-white rounded-tr-none' : 'bg-zinc-900 text-zinc-300 border border-zinc-800/60 rounded-tl-none'}`}>
                    {msg.text === welcomeMessage ? tr(welcomeMessage) : msg.text}
                  </div>
                </div>
              ))}

            {/*Animation de chargement*/}
            {isLoading && (
              <div className='flex justify-start'>
                <div className='bg-zinc-900 border-zinc-800/60 rounded-2xl rounded-tl-none px-4 py-3 shadow-md flex items-center gap-1'>
                  <span className='h-2 w-2 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.5s]'></span>
                  <span className='h-2 w-2 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.15s]'></span>
                  <span className='h-2 w-2 animate-bounce rounded-full bg-emerald-500'></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/*Formulaire*/}
          <form action="" onSubmit={handleSendMessage} className='p-4 border-t border-zinc-800 bg-zinc-900/20'>
            <div>
              <input
                type="text"
                placeholder={tr("Posez une question. . .")}
                id=""
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className='w-full rounded-xl border border-zinc-800 bg-zinc-900/60 py-2.5 pr-4 text-base text-zinc-200 placeholder-zinc-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm'
              />
              <button
                type='submit'
                disabled={isLoading || !input.trim()}
                className='absolute right-5 rounded-lg bg-emerald-600 p-1.5 bottom-6 text-white transition-all hover:bg-emerald-500 disabled:opacity-40 disabled:hover:bg-emerald-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 0.375 0.375M21 12H3m18 0-6.75 6.75M21 12l-6.75-6.75" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default AssistantIA
