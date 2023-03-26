import { Match, Switch } from 'solid-js'
import SettingsInput from '../ui/SettingsInput'
import type { Accessor } from 'solid-js'
import type { SettingsUI } from '@/types/provider'

interface Props {
  settings: SettingsUI
  editing: Accessor<boolean>
}

export default ({ settings, editing }: Props) => {
  if (!settings.name || !settings.type) return null
  return (
    <div class="mb-2">
      <Switch>
        <Match when={settings.type === 'input'}>
          <SettingsInput settings={settings} editing={editing} />
        </Match>
      </Switch>
    </div>
  )
}
