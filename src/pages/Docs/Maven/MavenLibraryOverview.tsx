import { useLanguage } from '../../../i18n/LanguageContext';
import { CodeBlock } from '../../../components/CodeBlock/CodeBlock';
import { DocsNavigation } from '../../../components/DocsNavigation';

type MavenLibraryId = 'utils' | 'validation' | 'core' | 'authorization' | 'authentication';

type MavenLibrary = {
  artifactId: string;
  version: string;
  repository: string;
  apiPath: string;
  features: Array<Record<'en' | 'pt', string>>;
  api: string[];
  en: {
    subtitle: string;
    description: string;
    configuration: string;
  };
  pt: {
    subtitle: string;
    description: string;
    configuration: string;
  };
};

const libraries: Record<MavenLibraryId, MavenLibrary> = {
  utils: {
    artifactId: 'forgepack-utils',
    version: '0.0.12',
    repository: 'forgepack-utils',
    apiPath: 'src/main/java/dev/forgepack/utils/api',
    features: [
      { en: 'Email service auto-configuration', pt: 'Auto-configuração do serviço de e-mail' },
      { en: 'QR code generation', pt: 'Geração de QR Code' },
      { en: 'AES encryption service', pt: 'Serviço de criptografia AES' },
    ],
    api: ['EmailService', 'EncryptorService', 'EncryptorException', 'QRCode'],
    en: {
      subtitle: 'Cross-cutting email, QR code, and AES encryption utilities for Spring Boot.',
      description: 'Auto-configured services for common application infrastructure without coupling them to a domain model.',
      configuration: 'The library is discovered through Spring Boot auto-configuration. Configure mail and encryption settings in your application as needed.',
    },
    pt: {
      subtitle: 'Utilitários transversais de e-mail, QR Code e criptografia AES para Spring Boot.',
      description: 'Serviços auto-configurados para infraestrutura recorrente da aplicação, sem acoplamento a um modelo de domínio.',
      configuration: 'A biblioteca é descoberta pela auto-configuração do Spring Boot. Configure e-mail e criptografia na aplicação conforme necessário.',
    },
  },
  validation: {
    artifactId: 'forgepack-validation',
    version: '0.0.9',
    repository: 'forgepack-validation',
    apiPath: 'src/main/java/dev/forgepack/validation/api',
    features: [
      { en: 'Portable Bean Validation constraints', pt: 'Restrições Bean Validation portáveis' },
      { en: 'Password composition validators', pt: 'Validadores de composição de senha' },
      { en: 'Unique value validation contract', pt: 'Contrato para validação de valores únicos' },
    ],
    api: ['HasDigit', 'HasLetter', 'HasLowerCase', 'HasUpperCase', 'HasLength', 'Unique', 'UniqueCheckableService'],
    en: {
      subtitle: 'Portable custom Bean Validation constraints with no Spring Security or JPA dependency.',
      description: 'Reusable annotations and validators for password rules and uniqueness checks in Spring Boot applications.',
      configuration: 'Add the dependency and apply the provided annotations to request or domain fields. Implement UniqueCheckableService where uniqueness validation is required.',
    },
    pt: {
      subtitle: 'Restrições Bean Validation customizadas e portáveis, sem dependências de Spring Security ou JPA.',
      description: 'Anotações e validadores reutilizáveis para regras de senha e verificação de unicidade em aplicações Spring Boot.',
      configuration: 'Adicione a dependência e aplique as anotações fornecidas em campos de requisição ou domínio. Implemente UniqueCheckableService quando precisar validar unicidade.',
    },
  },
  core: {
    artifactId: 'forgepack-core',
    version: '0.0.26',
    repository: 'forgepack-core',
    apiPath: 'src/main/java/dev/forgepack/core/api',
    features: [
      { en: 'Generic CRUD controllers and services', pt: 'Controladores e serviços CRUD genéricos' },
      { en: 'Audit and restoration support', pt: 'Suporte a auditoria e restauração' },
      { en: 'HATEOAS and OpenAPI auto-configuration', pt: 'Auto-configuração de HATEOAS e OpenAPI' },
    ],
    api: ['EntityCrud', 'DTOIdentifiable', 'CrudRepository', 'ReadService', 'MutableService', 'RestorableService', 'Mapper'],
    en: {
      subtitle: 'Spring Boot foundations for reusable CRUD, REST, audit, HATEOAS, and OpenAPI behavior.',
      description: 'Base abstractions that standardize entities, repositories, services, controllers, payloads, and common API errors.',
      configuration: 'Keep your application class in a parent package of its entities, repositories, services, and controllers so Spring Boot discovers your concrete implementations.',
    },
    pt: {
      subtitle: 'Fundação Spring Boot para CRUD, REST, auditoria, HATEOAS e OpenAPI reutilizáveis.',
      description: 'Abstrações base que padronizam entidades, repositórios, serviços, controladores, payloads e erros comuns de API.',
      configuration: 'Mantenha a classe da aplicação em um pacote pai de entidades, repositórios, serviços e controladores para que o Spring Boot descubra as implementações concretas.',
    },
  },
  authorization: {
    artifactId: 'forgepack-authorization',
    version: '0.0.18',
    repository: 'forgepack-authorization',
    apiPath: 'src/main/java/dev/forgepack/authorization',
    features: [
      { en: 'User, role, and privilege RBAC model', pt: 'Modelo RBAC de usuários, papéis e privilégios' },
      { en: 'REST controllers and DTOs', pt: 'Controladores REST e DTOs' },
      { en: 'Service and repository layers', pt: 'Camadas de serviço e repositório' },
    ],
    api: ['User', 'Role', 'Privilege', 'ControllerUser', 'ControllerRole', 'ControllerPrivilege', 'UserService', 'RoleService', 'PrivilegeService'],
    en: {
      subtitle: 'Complete role-based access control with users, roles, privileges, and REST endpoints.',
      description: 'An auto-configured authorization model built on Forgepack Core and Forgepack Validation.',
      configuration: 'The dependency brings the RBAC model and its endpoints. Configure persistence in the consuming Spring Boot application and integrate the model with your authorization rules.',
    },
    pt: {
      subtitle: 'Controle de acesso baseado em papéis completo, com usuários, papéis, privilégios e endpoints REST.',
      description: 'Modelo de autorização auto-configurado construído sobre Forgepack Core e Forgepack Validation.',
      configuration: 'A dependência disponibiliza o modelo RBAC e seus endpoints. Configure a persistência na aplicação Spring Boot consumidora e integre o modelo às regras de autorização.',
    },
  },
  authentication: {
    artifactId: 'forgepack-authentication',
    version: '0.0.20',
    repository: 'forgepack-authentication',
    apiPath: 'src/main/java/dev/forgepack/authentication/api',
    features: [
      { en: 'Login, logout, and refresh-token flows', pt: 'Fluxos de login, logout e refresh token' },
      { en: 'JWT security filter and configuration', pt: 'Filtro e configuração de segurança JWT' },
      { en: 'TOTP/2FA and token caching support', pt: 'Suporte a TOTP/2FA e cache de tokens' },
    ],
    api: ['AuthenticationService', 'AuthenticationController', 'JwtProperties', 'JwtFilter', 'TokenRequest', 'TokenResponse', 'UserAuthRequest'],
    en: {
      subtitle: 'Spring Boot authentication flows with JWT, refresh tokens, password changes, and TOTP/2FA.',
      description: 'An auto-configured security layer that builds on Forgepack Authorization and Forgepack Utils.',
      configuration: 'Configure JWT and cache properties in the consuming application, then expose the provided authentication flow through your Spring Security setup.',
    },
    pt: {
      subtitle: 'Fluxos de autenticação Spring Boot com JWT, refresh token, alteração de senha e TOTP/2FA.',
      description: 'Camada de segurança auto-configurada que utiliza Forgepack Authorization e Forgepack Utils.',
      configuration: 'Configure as propriedades de JWT e cache na aplicação consumidora e exponha o fluxo de autenticação fornecido pela configuração do Spring Security.',
    },
  },
};

interface MavenLibraryOverviewProps {
  libraryId: MavenLibraryId;
}

export default function MavenLibraryOverview({ libraryId }: MavenLibraryOverviewProps) {
  const { language } = useLanguage();
  const library = libraries[libraryId];
  const content = library[language];
  const dependency = `<dependency>
  <groupId>dev.forgepack</groupId>
  <artifactId>${library.artifactId}</artifactId>
  <version>${library.version}</version>
</dependency>`;
  const gradle = `implementation 'dev.forgepack:${library.artifactId}:${library.version}'`;
  const apiUrl = `https://github.com/forgepack/${library.repository}/tree/main/${library.apiPath}`;

  return (
    <article>
      <h1>{library.artifactId}</h1>
      <p className="docs-subtitle">{content.subtitle}</p>
      <p>{content.description}</p>

      <h2>{language === 'en' ? 'Main Features' : 'Principais Recursos'}</h2>
      <div className="feature-grid" style={{ marginTop: 'var(--space-6)' }}>
        {library.features.map((feature) => (
          <div key={feature.en} className="feature-card">
            <div className="feature-icon">☕</div>
            <p>{feature[language]}</p>
          </div>
        ))}
      </div>

      <h2>{language === 'en' ? 'Installation' : 'Instalação'}</h2>
      <h3>Maven</h3>
      <CodeBlock code={dependency} language="xml" filename="pom.xml" />
      <h3>Gradle</h3>
      <CodeBlock code={gradle} language="groovy" filename="build.gradle" />

      <h2>{language === 'en' ? 'Getting Started' : 'Primeiros Passos'}</h2>
      <p>{content.configuration}</p>

      <h2>{language === 'en' ? 'Public API Reference' : 'Referência da API Pública'}</h2>
      <p>
        {language === 'en'
          ? 'The following public entry points are documented in the library source:'
          : 'Os seguintes pontos de entrada públicos estão documentados no código-fonte da biblioteca:'}
      </p>
      <ul>
        {library.api.map((api) => <li key={api}><code>{api}</code></li>)}
      </ul>
      <p>
        <a href={apiUrl} target="_blank" rel="noreferrer">
          {language === 'en' ? 'Browse the full API source on GitHub' : 'Consultar a API completa no GitHub'}
        </a>
      </p>

      <DocsNavigation />
    </article>
  );
}
