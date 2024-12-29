import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "no-extra-semi": "off",
      "no-console": "warn", // Предупреждает о вызовах console  
      "no-empty": "error", // Запрещает пустые блоки (могут скрывать потенциальные проблемы).
      "no-empty-pattern": "error", // Запрещает пустые шаблоны деструктуризации.
      "no-eval": "error", // Запрещает использование eval() (может быть риском безопасности и проблемой производительности).
      "no-extra-boolean-cast": "error", // Запрещает ненужные приведения к булевым значениям.
      "no-extra-parens": "off", // Предупреждает о ненужных скобках (может повлиять на читаемость).  /////////
      "no-lonely-if": "off", // Запрещает операторы if без блока else.
      "no-loop-func": "warn", // Запрещает объявления функций внутри циклов.
      "no-mixed-operators": "off", // Запрещает смешивание разных операторов.
      "no-redeclare": "error", // Запрещает повторное объявление переменных.
      "no-self-assign": "error", // Запрещает присваивание переменной самой себе.
      "no-self-compare": "error", // Запрещает сравнение значения с самим собой.
      "no-undef": "off", // Запрещает неопределенные переменные. 
      "no-unsafe-finally": "error", // Запрещает небезопасное использование finally.
      "no-unsafe-negation": "error", // Запрещает небезопасное отрицание оператора !.
      "no-useless-catch": "error", // Запрещает ненужные блоки catch.
      "no-useless-concat": "error", // Запрещает ненужные конкатенации строк.
      "no-useless-escape": "error", // Запрещает ненужные экранирования в строках.
      "no-useless-return": "error", // Запрещает ненужные операторы return.
      "no-var": "error", // Запрещает объявления var (предпочитаются let или const).
      "require-await": "error", // Рекомендует использовать await в асинхронных функциях.
      "@typescript-eslint/no-unused-vars":"off" //Пока отключаю (предупреждение о неиспользуемых переменных)
    },
  },
)
