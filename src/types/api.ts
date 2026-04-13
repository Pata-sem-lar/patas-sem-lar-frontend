import type { RoleEnum, StatusAgendamento } from "./enums";

// ---------------------------------------------------------------------------
// Primitivos reutilizáveis
// ---------------------------------------------------------------------------

/** Timestamps chegam do backend como string ISO 8601 UTC */
type ISOTimestamp = string;

/** Preço chega como string porque o backend usa Decimal(10,2) */
type DecimalString = string;

// ---------------------------------------------------------------------------
// Erros da API
// ---------------------------------------------------------------------------

/** Erro de validação do FastAPI (campo inválido) */
export interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

/**
 * FastAPI retorna erros assim:
 *   { detail: "mensagem" }          — erros simples (401, 404, etc.)
 *   { detail: ValidationError[] }   — erros de validação (422)
 */
export interface ApiError {
  detail: string | ValidationError[];
}

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------

export interface TokenResponse {
  access_token: string;
  token_type: "bearer";
  user: UsuarioDTO;
}

export interface RefreshResponse {
  access_token: string;
  token_type: "bearer";
}

// ---------------------------------------------------------------------------
// Usuário
// ---------------------------------------------------------------------------

export interface UsuarioDTO {
  id: string;
  nome: string;
  email: string;
  telefone: string | null;
  role: RoleEnum;
  created_at: ISOTimestamp;
}

// ---------------------------------------------------------------------------
// Loja
// ---------------------------------------------------------------------------

export interface LojaDTO {
  id: string;
  owner_id: string;
  nome: string;
  descricao: string | null;
  telefone: string | null;
  email: string | null;
  endereco: string | null;
  logo_url: string | null;
  is_active: boolean;
  created_at: ISOTimestamp;
  updated_at: ISOTimestamp;
}

// ---------------------------------------------------------------------------
// Profissional
// ---------------------------------------------------------------------------

export interface ProfissionalDTO {
  id: string;
  usuario_id: string;
  loja_id: string;
  /** Nome vem do Usuario relacionado — o backend desnormaliza para evitar joins no frontend */
  nome: string;
  bio: string | null;
  foto_url: string | null;
  is_active: boolean;
}

// ---------------------------------------------------------------------------
// Serviço
// ---------------------------------------------------------------------------

export interface ServicoDTO {
  id: string;
  profissional_id: string;
  nome: string;
  descricao: string | null;
  /** Decimal(10,2) serializado como string pelo backend */
  preco: DecimalString;
  duracao_minutos: number;
  is_active: boolean;
}

// ---------------------------------------------------------------------------
// Horário de trabalho
// ---------------------------------------------------------------------------

export interface HorarioTrabalhoDTO {
  id: string;
  profissional_id: string;
  /** 0 = segunda ... 6 = domingo */
  dia_semana: number;
  /** Formato "HH:MM:SS" */
  hora_inicio: string;
  hora_fim: string;
  is_active: boolean;
}

// ---------------------------------------------------------------------------
// Agendamento
// ---------------------------------------------------------------------------

export interface AgendamentoDTO {
  id: string;
  cliente_id: string;
  profissional_id: string;
  servico_id: string;
  data_hora_inicio: ISOTimestamp;
  data_hora_fim: ISOTimestamp;
  status: StatusAgendamento;
  notas: string | null;
  cancelado_por: string | null;
  cancelado_motivo: string | null;
  created_at: ISOTimestamp;
  // Relações opcionais — incluídas quando o endpoint expande os dados
  cliente?: UsuarioDTO;
  profissional?: ProfissionalDTO;
  servico?: ServicoDTO;
}

// ---------------------------------------------------------------------------
// Disponibilidade
// ---------------------------------------------------------------------------

/** Retornado por GET /profissionais/{id}/slots-disponiveis */
export interface SlotsResponse {
  data: string; // "YYYY-MM-DD"
  profissional_id: string;
  servico_id: string;
  duracao_minutos: number;
  /**
   * Slots disponíveis como ISO 8601 UTC.
   * O valor selecionado vai direto como `data_hora_inicio` na criação do agendamento.
   * Array vazio = sem disponibilidade (não é 404).
   */
  slots: ISOTimestamp[];
}

// ---------------------------------------------------------------------------
// Paginação
// ---------------------------------------------------------------------------

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  per_page: number;
}
