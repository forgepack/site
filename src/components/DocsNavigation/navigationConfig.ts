import { NavigationConfig } from './types';

export const navigationConfig: NavigationConfig = {
  request: {
    order: [
      'overview',
      'getting-started', 
      'quick-start',
      'authentication',
      'route-protection',
      'requests',
      'crud-operations',
      'token-management',
      'reference/hooks',
      'reference/components',
      'reference/services',
      'reference/types',
      'reference/utilities',
      'examples/login-form',
      'examples/dashboard',
      'examples/users-list'
    ],
    pages: {
      'overview': { 
        en: { label: 'Overview', title: 'Overview' },
        pt: { label: 'Visão Geral', title: 'Visão Geral' }
      },
      'getting-started': { 
        en: { label: 'Getting Started', title: 'Getting Started' },
        pt: { label: 'Primeiros Passos', title: 'Primeiros Passos' }
      },
      'quick-start': { 
        en: { label: 'Quick Start', title: 'Quick Start' },
        pt: { label: 'Início Rápido', title: 'Início Rápido' }
      },
      'authentication': { 
        en: { label: 'Authentication', title: 'Authentication' },
        pt: { label: 'Autenticação', title: 'Autenticação' }
      },
      'route-protection': { 
        en: { label: 'Route Protection', title: 'Route Protection' },
        pt: { label: 'Proteção de Rotas', title: 'Proteção de Rotas' }
      },
      'requests': { 
        en: { label: 'Requests', title: 'Requests & Pagination' },
        pt: { label: 'Requisições', title: 'Requisições e Paginação' }
      },
      'crud-operations': { 
        en: { label: 'CRUD Operations', title: 'CRUD Operations' },
        pt: { label: 'Operações CRUD', title: 'Operações CRUD' }
      },
      'token-management': { 
        en: { label: 'Token Management', title: 'Token Management' },
        pt: { label: 'Gerenciamento de Tokens', title: 'Gerenciamento de Tokens' }
      },
      'reference/hooks': { 
        en: { label: 'Hooks', title: 'Hooks Reference' },
        pt: { label: 'Hooks', title: 'Referência dos Hooks' }
      },
      'reference/components': { 
        en: { label: 'Components', title: 'Components Reference' },
        pt: { label: 'Componentes', title: 'Referência dos Componentes' }
      },
      'reference/services': { 
        en: { label: 'Services', title: 'Services Reference' },
        pt: { label: 'Serviços', title: 'Referência dos Serviços' }
      },
      'reference/types': { 
        en: { label: 'Types', title: 'TypeScript Types' },
        pt: { label: 'Tipos', title: 'Tipos TypeScript' }
      },
      'reference/utilities': { 
        en: { label: 'Utilities', title: 'Utilities Reference' },
        pt: { label: 'Utilitários', title: 'Referência dos Utilitários' }
      },
      'examples/login-form': { 
        en: { label: 'Login Form', title: 'Login Form Example' },
        pt: { label: 'Formulário de Login', title: 'Exemplo de Formulário de Login' }
      },
      'examples/dashboard': { 
        en: { label: 'Dashboard', title: 'Dashboard Example' },
        pt: { label: 'Dashboard', title: 'Exemplo de Dashboard' }
      },
      'examples/users-list': { 
        en: { label: 'Users List', title: 'Users List Example' },
        pt: { label: 'Lista de Usuários', title: 'Exemplo de Lista de Usuários' }
      }
    }
  },
  leaflet: {
    order: [
      'overview',
      'getting-started',
      'examples/basic-map',
      'examples/markers',
      'examples/route-planning',
      'examples/image-overlays',
      'reference/components',
      'reference/hooks',
      'reference/services',
      'reference/types',
      'reference/utilities'
    ],
    pages: {
      'overview': { 
        en: { label: 'Overview', title: 'Overview' },
        pt: { label: 'Visão Geral', title: 'Visão Geral' }
      },
      'getting-started': { 
        en: { label: 'Getting Started', title: 'Getting Started' },
        pt: { label: 'Primeiros Passos', title: 'Primeiros Passos' }
      },
      'examples/basic-map': { 
        en: { label: 'Basic Map', title: 'Basic Map Examples' },
        pt: { label: 'Mapa Básico', title: 'Exemplos de Mapas Básicos' }
      },
      'examples/markers': { 
        en: { label: 'Markers', title: 'Markers Examples' },
        pt: { label: 'Marcadores', title: 'Exemplos de Marcadores' }
      },
      'examples/route-planning': { 
        en: { label: 'Route Planning', title: 'Route Planning' },
        pt: { label: 'Planejamento de Rotas', title: 'Planejamento de Rotas' }
      },
      'examples/image-overlays': { 
        en: { label: 'Image Overlays', title: 'Image Overlays' },
        pt: { label: 'Sobreposições de Imagem', title: 'Sobreposições de Imagem' }
      },
      'reference/components': { 
        en: { label: 'Components', title: 'Components Reference' },
        pt: { label: 'Componentes', title: 'Referência dos Componentes' }
      },
      'reference/hooks': { 
        en: { label: 'Hooks', title: 'Hooks Reference' },
        pt: { label: 'Hooks', title: 'Referência dos Hooks' }
      },
      'reference/services': { 
        en: { label: 'Services', title: 'Services Reference' },
        pt: { label: 'Serviços', title: 'Referência dos Serviços' }
      },
      'reference/types': { 
        en: { label: 'Types', title: 'TypeScript Types' },
        pt: { label: 'Tipos', title: 'Tipos TypeScript' }
      },
      'reference/utilities': { 
        en: { label: 'Utilities', title: 'Utilities Reference' },
        pt: { label: 'Utilitários', title: 'Referência dos Utilitários' }
      }
    }
  }
};