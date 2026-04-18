import { useForm } from 'react-hook-form'
import { Calendar, Mail, Lock } from 'lucide-react'

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <div className='flex min-h-screen'> {/* container exterior */}
      
        <div className='w-2/3 flex flex-col justify-between p-10 relative overflow-hidden' style={{ background: 'linear-gradient(145deg, #C03830 0%, #E05040 45%, #F06A58 100%)' }}> {/* painel esquerdo - marca */}

                {/* Círculos decorativos */}
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}></div>
        <div className="absolute bottom-10 -left-12 w-40 h-40 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}></div>
        <div className="absolute top-1/2 right-8 w-20 h-20 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}></div>

        <div>  {/* bloco superior - ABRE */}
  
        {/* Linha do logo + nome */}
        <div className="flex items-center gap-2.5 mb-10">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <Calendar className="w-4 h-4 text-white" />
            </div>
            <h2 className='text-white font-bold text-xl font-heading'>Agendei</h2>
        </div>

        {/* Título grande e descrição - abaixo do logo */}
        <p className='text-white text-3xl font-black font-heading'>Sua agenda, do seu jeito.</p>
        <p className='text-sm mt-3' style={{ color: 'rgba(255,255,255,0.75)' }}>
            Clientes agendam online... Você só aparece para trabalhar.
        </p>

        </div>  {/* bloco superior - FECHA */}
        
        
            <div className='space-y-3'>   {/* bullets - ABRE */}
                <p className='flex items-center gap-3 rounded-xl px-4 py-3 text-white text-sm font-medium' style={{ background: 'rgba(255,255,255,0.15)' }}>✓ Sem ligações para confirmar horários</p>
                <p className='flex items-center gap-3 rounded-xl px-4 py-3 text-white text-sm font-medium' style={{ background: 'rgba(255,255,255,0.15)' }}>✓ Lembretes automáticos por email</p>
                <p className='flex items-center gap-3 rounded-xl px-4 py-3 text-white text-sm font-medium' style={{ background: 'rgba(255,255,255,0.15)' }}>✓ Painel completo para gestão de equipa</p>
            </div>                        {/* bullets - FECHA */}
        </div>
    
    

        <div className='w-[470px] flex flex-col justify-center p-10 bg-white'> {/* painel direito - formulário */}

            <h3 className='font-heading font-black text-2xl text-slate-900 mb-6'>Entrar na conta</h3>

            <p className="text-sm text-slate-500 mb-6">  Não tem conta?{' '}
                <a href="/cadastro" className="font-semibold" style={{ color: '#E05040' }}>Cadastre-se grátis </a>
            </p>

            <form className='space-y-4' onSubmit={handleSubmit((data) => console.log(data))}>
          
          {/* Campo email */}
            <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold text-slate-700'>Email</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input className='w-full border rounded-lg px-3 py-2 text-sm outline-none pl-10 space-y-4' style={{ borderColor: '#E8D8D4' }} {...register("email")} type="email" placeholder="seu@email.com" />
                    
                </div>
                {errors.email && <p className='text-red-500 text-xs mt-1'>{String(errors.email.message)}</p>}
            </div>

            {/* Campo password */}
            <div className='flex flex-col gap-1'>
                <div className="flex items-center justify-between">
                    <label className='text-sm font-semibold text-slate-700'>Senha</label>
                    <a href="#" className="text-xs font-medium" style={{ color: '#E05040' }}>Esqueceu?</a>                    
                </div>
                {errors.password && <p className='text-red-500 text-xs mt-1'>{String(errors.password.message)}</p>}

                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input className='w-full border rounded-lg px-3 py-2 text-sm outline-none pl-10 space-y-4' style={{ borderColor: '#E8D8D4' }} {...register("password")} type="password" placeholder="••••••••" />
                </div>
            </div>

            <button className='w-full py-2.5 text-sm font-bold text-white rounded-lg cursor-pointer mt-2' style={{ background: 'linear-gradient(135deg, #E05040, #F06A58)' }} type="submit">Entrar na conta</button>
          
            </form>
        </div>
    </div>       
  )
}